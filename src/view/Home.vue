<template>
    <div>
        <h3>{{title}}</h3>
        <div>
            <sui-card>
                <sui-image src="/src/assets/images/look_me_01.png"/>
                <sui-card-content>
                    <sui-card-header>Jihee</sui-card-header>
                    <sui-card-meta>1995. 4. 18</sui-card-meta>
                    <sui-card-description>Jihee is an frontend developer living in Siheung.</sui-card-description>
                </sui-card-content>
                <sui-card-content extra>
                    <sui-icon name="user" />
                    22 Friends</sui-card-content>
            </sui-card>
            <a href="https://semantic-ui-vue.github.io/#/views/card">카드는 여기있는거 복붙했어요!</a>
        </div>

        <hr>
        <br>
        <a href="https://semantic-ui-vue.github.io/#/elements/button" target="_blank">
            버튼은 이거보고 만들었어요!
        </a>
        <br><br>
        <div>
            <sui-button primary>Primary</sui-button>
            <sui-button secondary>Secondary</sui-button>
        </div>
        <div>
            <sui-button basic primary>Primary</sui-button>
            <sui-button basic secondary>Secondary</sui-button>
            <sui-button basic positive>Positive</sui-button>
            <sui-button basic negative>Negative</sui-button>
        </div><br>
        <div>
            <sui-button basic color="red">Red</sui-button>
            <sui-button basic color="orange">Orange</sui-button>
            <sui-button basic color="yellow">Yellow</sui-button>
            <sui-button basic color="olive">Olive</sui-button>
            <sui-button basic color="green">Green</sui-button>
            <sui-button basic color="teal">Teal</sui-button>
            <sui-button basic color="blue">Blue</sui-button>
            <sui-button basic color="violet">Violet</sui-button>
            <sui-button basic color="purple">Purple</sui-button>
            <sui-button basic color="pink">Pink</sui-button>
            <sui-button basic color="brown">Brown</sui-button>
            <sui-button basic color="grey">Grey</sui-button>
            <sui-button basic color="black">Black</sui-button>
        </div>
        <br>
        <div>
            <sui-button color="red" content="Red" />
            <sui-button color="orange" content="Orange" />
            <sui-button color="yellow" content="Yellow" />
            <sui-button color="olive" content="Olive" />
            <sui-button color="green" content="Green" />
            <sui-button color="teal" content="Teal" />
            <sui-button color="blue" content="Blue" />
            <sui-button color="violet" content="Violet" />
            <sui-button color="purple" content="Purple" />
            <sui-button color="pink" content="Pink" />
            <sui-button color="brown" content="Brown" />
            <sui-button color="grey" content="Grey" />
            <sui-button color="black" content="Black" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: () => {
            return {
                title: 'Let me know Your Good Place!',
            }
        },
        methods: {
            comma : function (d) {
                if (d === '-') return d
                else if (d === null) return 0
                else return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        }
    }
</script>

<style scoped>

</style>
