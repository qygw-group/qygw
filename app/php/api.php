<?php
/**
 * Created by PhpStorm.
 * User: libw
 * Date: 2017/5/22
 * Time: 15:55
 */
//解决跨域问题，文件代理
    $data=file_get_contents($_GET['url']);
    echo $data;
