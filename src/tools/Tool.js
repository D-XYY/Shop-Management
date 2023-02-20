const Tools = {
  //导出JSON方法
  exportJson(name, data) {
    var blob = new Blob([data]);//创建blob对象
    var link = window.document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = name;
    link.click();
  }
}

export default Tools;
