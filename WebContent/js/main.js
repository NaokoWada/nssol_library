var app = new Vue({

  el:'#app',
  data:{
    message:'Hello World!',
    message2:'こんにちは'
  }
})

var app2 = new Vue({

  el: '#app-2',
  data: {
      message: '現在時刻は ' + new Date().toLocaleString()
  }

})

var app3 = new Vue({

  el: '#app-3',
  data: {
      seen: true
  }

})

var app4 = new Vue({

  el: '#app-4',
  data: {
      todos: [
          { text: 'りんご' },
          { text: 'みかん' },
          { text: 'ぶどう' }

      ]
  }

})

var app5 = new Vue ({

  el: '#app-5',
  data: {
      message: 'あいうえおかきくけこさしすせそ'
  },
  methods: {
      reverseMessage: function() {
          this.message = this.message.split('').reverse().join('')
      }
  }
})

var app6 = new Vue({

  el: '#app-6',
  data: {
      message: 'こんにちは！　はじめまして'
  }
})

var app7 = new Vue({
  el:'#app-7',
  data:{
    url:'https://gogle.com',
    attribute:'href',
    urlTwitter:'https:twitter.com'
  }
})

var app8 = new Vue({
  el:'#app-8',
  data:{
    isActive:true,
    color:'red',
    bg:'bg-blue',
  },
  computed:{
    classObject:function(){
      return{
        red:this.isActive,
        'bg-blue':this.isActive
      }
    }
  }

})
