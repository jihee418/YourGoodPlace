export default {
    namespaced : true,
    state: {
        preSignedPost: {}
    },
    getters: {
    },
    mutations: {
        // 값 세팅하는곳
        setSIgnedPost: (state, data) => { state.preSignedPost = data },
    },
    actions: { /* 통신처리 */
        getSignedPost: function(context, payload) {

            let url = this._vm.apiUrl + '/getSignedPost?fileName='+payload.fileName;
            // let url = 'http://localhost:3002' + '/getSignedPost?fileName='+payload.fileName;

            return new Promise((resolve, reject) => {
                this._vm.get(url)
                    .then(response => {
                        if(response != null && response.meta.result) {
                            context.commit('setSIgnedPost', response.data.preSignedPost)
                            resolve(response)
                        } else {
                            reject(response)
                        }
                    }).catch(error => reject(error))
            })
        },
        upload: function(context, payload) {
            return new Promise((resolve, reject) => {
                
                // 사인된 Post정보 받기
                context.dispatch('getSignedPost', payload)
                    .then(response => {

                        let preSignedPost = response.data.preSignedPost
                        console.log(response)
                        let url = preSignedPost.url

                        let formData = new FormData();

                        for (let fieldKey in preSignedPost.fields) {
                            formData.append(fieldKey, preSignedPost.fields[fieldKey])
                        }

                        // *주의* 파일이 가장 마지막에 와야함. - S3는 파일 이후 데이터를 무시
                        formData.append('file', payload.file)
                        
                        // S3로 파일업로드
                        this._vm.postForm(url, formData)
                            .then(response => {
                                // 업로드된 파일 경로
                                payload.location = response.headers.location

                                if (location) {
                                    let url = this._vm.apiUrl + '/settlement/excel'

                                    //엑셀경로 전송
                                    this._vm.post(url, payload)
                                        .then(response => {
                                            resolve(response)
                                        }).catch(error => reject(error))
                                } else {
                                    reject({message: '업로드 위치를 전달받지 못하였습니다.'})
                                }
                            })
                            .catch(error => reject(error))
                    })
                    .catch(error => reject(error))
            })
        }
    }
}
