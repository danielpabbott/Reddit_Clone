angular.module('redditClone', [])
  .controller('controllerName', function($scope) {
    $scope.postForm = false;
    $scope.showComment = false;
    $scope.showAdd = false;
    $scope.addPost = function() {
      $scope.posts.push({
        title: $scope.title,
        author: $scope.author,
        description: $scope.description,
        image_url: $scope.image_url,
        date: new Date(),
        rating: 0,
        comments: []
      });
      $scope.title = "";
      $scope.author = "";
      $scope.description = "";
      $scope.image_url = "";
    }
    $scope.addComment = function(form) {
      console.log(form.commAuthor)
      $scope.posts[this.$index].comments.push({
        commAuthor: form.commAuthor,
        comment: form.comment
      });
      form.commAuthor="";
      form.comment="";
    }
    $scope.upVote = function() {
      this.post.rating += 1;
    };
    $scope.downVote = function() {
      this.post.rating -= 1;
    };
    $scope.posts = [{title: 'The First Article', author: 'Daniel Abbott', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image_url: 'https://placekitten.com/200/200', date: new Date(), rating: -2, comments: [{commAuthor: 'Daniel', comment: 'neato neato neato'}]},
    {title: 'A Second Article', author: 'Bradford', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image_url: 'https://placekitten.com/200/199', date: new Date(), rating: 2, comments: [{commAuthor: 'Bradford', comment: 'this site sux'}]}];
  })
