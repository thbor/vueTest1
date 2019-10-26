<template>
    <div>
        
        <div v-if="loading">
            loading...
        </div>
        <div v-else>
                <!-- <h1>{{contents}}</h1> -->
                <!-- <ul>
                    <li v-for="(p,index) in contents" :key="p.title">
                        {{index}}--{{p.title}}--{{p.name}}
                    </li>

                </ul> -->
                <div id="title" v-bind:style="titleDiv">
                     <!-- <li v-for="p in contents" :key="p.title">
                        {{p.title}}
                    </li> -->
                    <h1 style="text-align: center">{{contents.title}}</h1>
                </div>
                <div class="ArticleSection">
                <div class="article">
                    <div id="content" v-bind:class="contentDiv">
                    <h4>前言</h4>
                    <p>
                        <!-- 魔羯座的人，具有很強的耐力，
                        以及不屈不撓的奮鬥精神。
                        這種忠厚老實的態度，
                        多數人都會很欽佩。魔羯座的人，
                        由於過於潔癖或不願意妥協
                        以及道德觀過強的結果，常使得人際關係並不太理想，
                        因而常覺得是個很孤獨的人。他會依自己的標準去批判別人，
                        使得他不易交到朋友。充滿智慧，思緒周密。有高度的耐力，
                        在嚴苛的現實環境下仍然能夠耐心等待。
                        為了使計畫周全，可以熬過漫長艱辛的準備時期，
                        絕不鬆懈。思想深沉，熟知人間之事。或許行動不夠敏捷，
                        但是一定會持之以恆。 -->
                        {{contents.d1}}
                    </p>
                        
                </div>
                </div>
                </div>
                
                <div class="ArticleSection2">
                    <div class="article2">
                    <div id="right" v-bind:style="rightDiv">
                                        <div>
                                            <p>
                                                <!-- 此星座的人是腦子機警，時時想要抓住並利用環境，腦子的滲透力大，眼睛明亮，很快就可以看出別人的弱點以便供自己利用。一般來說，是討人喜歡的，表現出整齊而吸引人的外貌，具有迷人的風度，不容易受刺激，在危急時表現甚佳。 -->
                                                {{contents.d2}}
                                            </p>

                                        </div>
                    </div>
                    </div>
                </div>
                
        </div>

    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            contents:{},
            loading:false,
            titleDiv:{
               
            },
           
            contentDiv:{
                
               
            },
            rightDiv:{
              
            }
        }
    },
   mounted(){
       const url = `../static/${this.$route.params.userId}.json`;
    // const url = 'http://localhost:8081/testRouterLink/${this.$route.params.userId}'
       axios.get(url).then(Response=>{
           this.contents = Response.data.description;
           console.log(Response.data.description)
           return Response.data.description;
       })
   },
   computed:{
       //filterContent中与router传过来的信息【name】一样，其余信息过滤掉
   }
}
</script>
<style>
    div {
        display: block;
    }
    /* body {
    color: bisques
    } */

html {
    background-color:#DDDDDD;
}
.article {
    
    background: white;
    margin-bottom: 10px;
    padding-left: 20px;
    padding-top: 10px;
    border: 1px solid red;
    float: left;

}
.article2 {
    
    background: white;
    margin-bottom: 10px;
    padding-left: 20px;
    padding-top: 10px;
    border: 1px solid red;
    float: left;

}
.ArticleSection {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    width: 60%;
    border: 1px solid #ddd;
    padding: 0.8rem 0.4rem;
    margin-left: 3%;
}
.ArticleSection2 {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    width: 30%;
    border: 1px solid #ddd;
    padding: 0.8rem 0.4rem;
    margin-left: 3%;
}
</style>