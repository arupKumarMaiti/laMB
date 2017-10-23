angular.module("productCategoryModule").controller("productCategoryController", productCategoryController);

productCategoryController.$inject = ['$scope', 'productCategoryService'];

function productCategoryController($scope, productCategoryService) {

  $scope.productCategory = {
    categoryName: "",
    categoryDetails: ""
  };

  $scope.createProductCategory = function (productCategory) {
    productCategoryService.createProductCategory(productCategory).success(function (data) {
        alert("Data Processed");
    });
  }
}
