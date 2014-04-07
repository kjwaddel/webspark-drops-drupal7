<?php
/**
 * @file
 * openasu_demo.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function openasu_demo_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'save draft'.
  $permissions['save draft'] = array(
    'name' => 'save draft',
    'roles' => array(
      'CAS' => 'CAS',
      'administrator' => 'administrator',
    ),
    'module' => 'save_draft',
  );

  return $permissions;
}
