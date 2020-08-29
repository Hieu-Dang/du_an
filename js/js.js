function guithongtin() {
	var ht1=/^àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐD$/;
	var ht=document.getElementById('ht').value;
	if (ht=="") {
		document.getElementById('checkht').innerText='Không được để trống';
	}else{
		document.getElementById('checkht').innerText='hợp lệ';
	}

	var t1=/^[0-9]{1,3}$/;
	var t=document.getElementById('t').value;
	var checkt=t.search(t1);
	if (t=="") {
		document.getElementById('checkt').innerText='Không được để trống';
	}else if(checkt==-1){
		document.getElementById('checkt').innerText='không hợp lệ';
	}else{
		document.getElementById('checkt').innerText='hợp lệ';
	}

	var e1=/^([^@|.])$/;
	var e=document.getElementById('e').value;
	var checke=e.search(e1);
	if (e=="") {
		document.getElementById('checke').innerText='Không được để trống';
	}else if(checke==-1){
		document.getElementById('checke').innerText='không hợp lệ';
	}else{
		document.getElementById('checke').innerText='hợp lệ';
	}

	var gtnam=document.getElementById('gtnam').value;
	var gtnu=document.getElementById('gtnu').value;
	if (gtnam=='nam') {
		document.getElementById('checkgt').innerText='Không được để trống';
	}
}