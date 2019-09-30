<template>
    <div class="menuWrap">
        <sui-menu
            is="sui-sidebar"
            inverted="true"
            vertical="true"
            animation="overlay"
            :visible="visible"
        >
            <!-- 메뉴 타이틀 -->
            <sui-menu-item>
                <sui-image :src="menuImage" spaced="right" size="mini" />
                <strong>
                    Your Good Place
                    <small>
                        <em>{{version}}</em>
                    </small>
                </strong>
            </sui-menu-item>

            <!-- 메뉴들 -->
            <template v-for="menu in menuList">
                <!-- 하위 메뉴가 있는 메뉴-->
                <sui-menu-item v-if="menu.subMenuList">
                    <!-- 상위메뉴 제목 -->
                    <sui-menu-header>{{menu.name}}</sui-menu-header>
                    <!-- 서브메뉴 -->
                    <sui-menu-menu v-for="subMenu in menu.subMenuList">
                        <router-link is="sui-menu-item" :to="String(subMenu.url)">{{subMenu.name}}</router-link>
                    </sui-menu-menu>
                </sui-menu-item>

                <!-- 하위 메뉴가 없는 메뉴 -->
                <router-link v-else is="sui-menu-item" :to="String(menu.url)">
                    <i :class="menu.icon"></i>
                    {{menu.name}}
                </router-link>
            </template>

            <!-- API 문서 사이트 -->
            <sui-menu-item :link="true">
                <a
                    href="https://semantic-ui-vue.github.io/#/collections/menu"
                    target="_blank"
                >메뉴는 여기보고 만들었어요!</a>
            </sui-menu-item>

            <!--        <sui-menu-item>-->
            <!--            <sui-menu-header>서브메뉴로 구성</sui-menu-header>-->
            <!--            <sui-menu-menu>-->
            <!--                <router-link is="sui-menu-item" :to="'/test'">-->
            <!--                    TEST-->
            <!--                </router-link>-->
            <!--            </sui-menu-menu>-->
            <!--        </sui-menu-item>-->
        </sui-menu>

        <!--    <sui-menu-item>-->
        <!--        <sui-menu-header>서브메뉴로 구성</sui-menu-header>-->
        <!--        <sui-menu-menu>-->
        <!--            <router-link v-for="menu in menuList" is="sui-menu-item" :to="menu.url">-->
        <!--                {{menu.name}}-->
        <!--            </router-link>-->
        <!--        </sui-menu-menu>-->
        <!--    </sui-menu-item>-->
    </div>
</template>

<script>
export default {
    name: "Menu",
    data: () => {
        return {
            visible: true,
            menuImage: "/src/assets/images/favicon/ms-icon-150x150.png",
            version: env.VERSION,
            menuList: [
                { name: "홈", url: "/", icon: "home icon" },
                { name: "메뉴1", url: "/product", icon: "home icon" },
                {
                    name: "메뉴1",
                    subMenuList: [
                        { name: "서브메뉴1", url: "/product" },
                        { name: "서브메뉴2", url: "/product/storefarm" }
                    ]
                }
            ]
        };
    },
    created: function() {
        console.log(this.menuList);
    },
    mounted: function() {
        this.$store.dispatch("menu/getMenu").then(response => {
            console.log(this.state);
        });
    },
    computed: {
        state: function() {
            return this.$store.state.menu;
        }
    }
};
</script>

<style scoped>
.menuWrap > .ui.menu {
    background-color: #fff;
}
.ui.inverted.menu > .item {
    border-bottom: solid 1px #e7e7e7;
}
.ui.inverted.menu .item,
.ui.inverted.menu .item > a:not(.ui),
.ui.vertical.inverted.menu .menu .item,
.ui.vertical.inverted.menu .menu .item a:not(.ui) {
    color: #606060;
}
.ui.inverted.menu .item:hover,
.ui.inverted.menu .item > a:not(.ui):hover {
    color: #0d0d0d;
    background-color: #e5e5e5;
}
.ui.inverted.menu .item:hover .icon,
.ui.inverted.menu .item > a:not(.ui):hover .icon {
    color: #ff0000;
}
</style>
