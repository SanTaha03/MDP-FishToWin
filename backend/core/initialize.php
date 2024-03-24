<?php

defined('DS') ? null : define('DS', DIRECTORY_SEPARATOR);
defined('INC_PATH') ? null : define('INC_PATH', DS . 'includes');
defined('CORE_PATH') ? null : define('CORE_PATH', DS . 'core');

require_once(INC_PATH . DS . 'config.php');
require_once(CORE_PATH . DS . 'post.php');