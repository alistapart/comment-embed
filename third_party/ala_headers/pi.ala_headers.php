<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * A List Apart Headers Plugin
 *
 * @package		ExpressionEngine
 * @subpackage	Addons
 * @category	Plugin
 * @author		Matt Weinberg
 * @link		http://www.vectormediagroup.com
 */

$plugin_info = array(
	'pi_name'		=> 'A List Apart Headers',
	'pi_version'	=> '0.1',
	'pi_author'		=> 'Matt Weinberg',
	'pi_author_url'	=> 'http://www.vectormediagroup.com',
	'pi_description'=> 'Sets template headers via EE tags',
	'pi_usage'		=> Ala_headers::usage()
);


class Ala_headers {

	public $return_data;
    
	/**
	 * Constructor
	 */
	public function __construct() {
		$this->EE =& get_instance();
	}

	/**
	 * Sets CORS Access-Control-Allow-Origin: * header
	 */
	public function cors() {
		$this->EE->output->set_header('Access-Control-Allow-Origin: *');
	}
	
	// ----------------------------------------------------------------
	
	/**
	 * Plugin Usage
	 */
	public static function usage() {
		$usage = <<<HEREDOC
{exp:ala_headers:cors} sets a header of "Access-Control-Allow-Origin: *" when used on a template
HEREDOC;
		return $usage;
	}
}


/* End of file pi.ala_headers.php */
/* Location: /system/expressionengine/third_party/ala_headers/pi.ala_headers.php */