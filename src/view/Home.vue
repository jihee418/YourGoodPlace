<template>
    <div class="newPlace">
        <h3>{{title}}</h3>
        <div>
            <sui-grid :columns="4">
                <sui-grid-row>
                    <sui-grid-column v-for="(col, j) in [,,,,,,,,]" :key="j">
                        <docs-wireframe name="media-paragraph" />
                        <sui-card>
                            <sui-image src="/src/assets/images/look_me_01.png" />
                            <sui-card-content>
                                <sui-card-header>title</sui-card-header>
                                <!-- <sui-card-meta>오늘</sui-card-meta> -->
                                <!-- <sui-card-description>맛집에 대한 설명글이 들어갈 영역. 길게 쓰면 이런느낌일꺼야!!</sui-card-description> -->
                            </sui-card-content>
                            <sui-card-content extra class="userInfo">
                                <span class="photo">
                                    <sui-image
                                        src="http://lorempixel.com/100/100/"
                                        shape="circular"
                                        size="mini"
                                    />
                                </span>
                                <span class="name">jihee</span>
                                &#183;
                                <span class="date">오늘</span>
                            </sui-card-content>
                        </sui-card>
                    </sui-grid-column>
                </sui-grid-row>
            </sui-grid>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data: () => {
        return {
            title: "Let me know Your Good Place!"
        };
    },
    methods: {
        comma: function(d) {
            if (d === "-") return d;
            else if (d === null) return 0;
            else return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
};
</script>

<style scoped>
.ui.grid > .column:not(.row),
.ui.grid > .row > .column {
    padding-left: 0;
    padding-right: 10px;
}

.userInfo .name {
    margin-left: 5px;
}
</style>
