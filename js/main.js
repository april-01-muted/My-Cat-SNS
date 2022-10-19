(function(){
  'use strict';

  var vm = new Vue({
    el:'#app',
    data: {
      newUserIcon: 'nomal',
      newUserNama : '',
      newText : '',
      nowThema : 'brown',
      posts : [
        {
          icon: 'nomal',
          user: 'かいぬし➀',
          text: 'ねこかわいい',
          likes: 0
        }
      ]
    },
    methods: {
      addPost: function() {
        if(this.newText === '' || this.newUserNama === ''){
          alert("なまえか投稿内容が未入力です！");
          return;
        }
        var post = {
          icon: this.newUserIcon,
          user: this.newUserNama,
          text: this.newText,
          likes: 0
        };
        console.log(post);
        this.posts.push(post);
        this.newUserNama = '';
        this.newText = '';
      },
      addLike: function(index) {
        this.posts[index].likes++;
      },
      changeTheme: function() {
        if(this.nowThema === 'brown'){
          this.nowThema = 'gray';
        }else{
          this.nowThema = 'brown';
        }
      },
      img_src: function(index) {
        const src = this.posts[index].icon;
        return src;
      }
    }
  });
})();
