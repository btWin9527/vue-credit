<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside>
        <Sidebar/>
      </el-aside>

      <el-container>
        <!-- 顶部导航 -->
        <el-header>
          <Header/>
        </el-header>

        <!-- 内容区域 -->
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {Header, Sidebar, Main} from "./components";

  export default {
    components: {Header, Sidebar, Main},
  }
</script>
