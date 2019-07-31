
/**
 * showKeyboard
 * @desc 通知客户端显示密码键盘
 * @param {Object} config 键盘配置
 * @param {String} config.mask 设置键盘遮挡
 * @param {String} config.random 设置是否乱序
 * @param {String} config.encryptor 设置是否检测强度
 * @param {String} config.keyboardType 设置键盘类型
 * @param {String} config.maxLength 设置最大长度
 * @param {Function} config.onKeyboardPopup 键盘弹起的回调
 * @param {Function} config.onInput 键盘输入的回调
 * @param {String} config.onInput.data 键盘输入的数据
 * @param {String} config.onInput.data.text 遮挡数据
 * @param {String} config.onInput.data.value 加密后的值（3des）
 * @param {String} config.onInput.data.strength 密码强度
 * @param {Function} config.onDelete 键盘删除值的回调
 * @param {String} config.onDelete.data 键盘输入的数据
 * @param {String} config.onDelete.data.text 遮挡数据
 * @param {String} config.onDelete.data.value 加密后的值（3des）
 * @param {String} config.onDelete.data.strength 密码强度
 * @param {Function} config.onSubmit 键盘完成的回调
 * @param {String} config.onSubmit.data 键盘输入的数据
 * @param {String} config.onSubmit.data.text 遮挡数据
 * @param {String} config.onSubmit.data.value 加密后的值（3des）
 * @param {String} config.onSubmit.data.strength 密码强度
 */

/**
 * setLocalStorageItem
 * @desc 调用客户保存数据
 * @param {Object} data 保存数据的对象
 * @param {String} data.filename 保存数据的文件名
 * @param {Array} data.data 需要保存的值的对应关系,格式为（key:键索引，value:键值）
 * @param {Function} callback 保存结果的回调
 * @param {Object} callback.response 返回数据
 * @param {String} callback.response.result 保存结果（1成功0失败）
 */

/**
 * getLocalStorageItem
 * @desc 调用客户端获取数据
 * @param {Object} data 请求的数据对象
 * @param {String} data.filename 获取数据的文件名
 * @param {Array} data.data 需要获取的值的索引数组,格式为（key:键索引）
 * @param {Function} callback 获取数据的回调
 * @param {Object} callback.response 返回数据
 * @param {Array} callback.response.data 返回数据数组，格式为（key：value）
 */

/**
 * getAllInfo
 * @desc 获取全部设备信息
 * @param {Function} callback 获取设备信息的回调
 * @param {Object} callback.response 返回数据格式{key：value,……},key目前设置的有:osType操作系统类型、osVersion操作系统版本、uniqiID唯一标示
 */

/**
 * getSingleInfo
 * @desc 获取指定设备信息
 * @param {String} data 获取发送参数
 * @param {String} data.param 获取的设备信息名称，支持的字段参考getAllInfo注释
 * @param {Function} callback 获取设备信息的回调
 * @param {Object} callback.response 返回数据格式{key：value}，key可能取值见getAllInfo注释
 */

/**
 * openGPSListener
 * @desc 打开GPS监听
 * @param {Object} config 配置信息
 * @param {Function} config.onOpen 打开回调函数
 * @param {Object} config.onOpen.param 客户端回传数据
 * @param {Object} config.onOpen.param.responseData 执行打开回传数据
 * @param {String} config.onOpen.param.responseData.result 打开执行结果（0成功1失败）
 * @param {Function} config.onGPSChange 监听GPS变化回调函数
 * @param {Object} config.onGPSChange.param 客户端回传数据
 * @param {Object} config.onGPSChange.param.responseData GPS数据
 * @param {String} config.onGPSChange.param.responseData.lat 纬度
 * @param {String} config.onGPSChange.param.responseData.lon 经度
 */

/**
 * closeGPSListener
 * @desc 关闭GPS监听
 * @param {Object} config 配置信息
 * @param {Function} config.onClose 关闭回调函数
 * @param {Object} config.onClose.param 客户端回传数据
 * @param {Object} config.onClose.param.responseData 执行关闭回传数据
 * @param {String} config.onClose.param.responseData.result 关闭执行结果（0成功1失败）
 */

/**
 * openGPSOnce
 * @desc 一次性取得GPS信息
 * @param {Object} config 配置信息
 * @param {Function} config.onGPSChange 监听GPS变化回调函数
 * @param {Object} config.onGPSChange.param 客户端回传数据
 * @param {Object} config.onGPSChange.param.responseData GPS数据
 * @param {String} config.onGPSChange.param.responseData.lat 纬度
 * @param {String} config.onGPSChange.param.responseData.lon 经度
 */

/**
 * showGPS
 * @desc 进入原生GPS界面
 * @param {Function} callback 调用GPS展示的回调
 */

/**
 * openScan
 * @desc 通知客户端调用二维码扫描
 * @param {Function} callback 调用二维码扫描的回调
 * @param {Object} callback.response 返回数据
 * @param {String} callback.response.info 扫描获取的信息
 */

/**
 * openEncode
 * @desc 通知客户端调用二维码生成
 * @param {Object} param 发送的参数
 * @param {String} param.info 待生成图片的信息
 * @param {Function} callback 二维码生成的回调
 * @param {Object} callback.response 返回数据
 * @param {String} callback.response.image base64处理后的字符串
 */

/**
 * showCamera
 * @desc 打开相机
 * @param {Function} callback 相机的回调
 */

/**
 * getCameraImageData
 * @desc 获取相机图片base64字符串
 * @param {Function} callback 获取相机图片base64字符串的回调
 * @param {Object} callback.response 返回数据
 * @param {String} callback.response.image base64处理后的字符串
 */

/**
 * getCameraImagePath
 * @desc 获取相机图片地址
 * @param {Function} callback 获取相机图片地址的回调
 * @param {Object} callback.response 返回数据
 * @param {String} callback.response.image 图片地址
 */

/**
 * getImageData
 * @desc 读取相册图片base64处理后字符串
 * @param {Function} callback 读取相册图片base64处理后字符串的回调
 * @param {Object} callback.response 返回数据
 * @param {String} callback.response.image base64处理后的字符串
 */

/**
 * getImagePath
 * @desc 读取相册图片地址
 * @param {Function} callback 读取相册图片地址的回调
 * @param {Object} callback.response 返回数据
 * @param {String} callback.response.image 图片地址
 */

/**
 * openShakeListener
 * @desc 打开摇一摇监听
 * @param {Object} config 配置信息
 * @param {Function} config.onOpen 打开回调函数
 * @param {Object} config.onOpen.param 客户端回传数据
 * @param {Object} config.onOpen.param.responseData 执行打开回传数据
 * @param {String} config.onOpen.param.responseData.result 打开执行结果（0成功1失败）
 * @param {Function} config.onShakeChange 监听摇一摇变化回调函数
 * @param {Object} config.onShakeChange.param 客户端回传数据
 * @param {Object} config.onShakeChange.param.responseData GPS数据
 * @param {String} config.onShakeChange.param.responseData.result 摇一摇执行结果（0成功1失败）
 */

/**
 * closeShakeListener
 * @desc 关闭摇一摇监听
 * @param {Object} config 配置信息
 * @param {Function} config.onClose 关闭回调函数
 * @param {Object} config.onClose.param 客户端回传数据
 * @param {Object} config.onClose.param.responseData 执行关闭回传数据
 * @param {String} config.onClose.param.responseData.result 关闭执行结果（0成功1失败）
 */

/**
 * openShakeOnce
 * @desc 一次性取得摇一摇监听
 * @param {Object} config 配置信息
 * @param {Function} config.onShakeChange 监听摇一摇变化回调函数
 * @param {Object} config.onShakeChange.param 客户端回传数据
 * @param {Object} config.onShakeChange.param.responseData GPS数据
 * @param {String} config.onShakeChange.param.responseData.result 摇一摇执行结果（0成功1失败）
 */

/**
 * showShake
 * @desc 进入原生摇一摇界面
 * @param {Function} callback 调用摇一摇展示的回调
 */

/**
 * openGSensorListener
 * @desc 打开重力感应监听
 * @param {Object} config 配置信息
 * @param {Function} config.onOpen 打开回调函数
 * @param {Object} config.onOpen.param 客户端回传数据
 * @param {Object} config.onOpen.param.responseData 执行打开回传数据
 * @param {String} config.onOpen.param.responseData.result 打开执行结果（0成功1失败）
 * @param {Function} config.onGSensorChange 监听重力感应变化回调函数
 * @param {Object} config.onGSensorChange.param 客户端回传数据
 * @param {Object} config.onGSensorChange.param.responseData 重力感应数据
 * @param {String} config.onGSensorChange.param.responseData.x x方向加速度
 * @param {String} config.onGSensorChange.param.responseData.y y方向加速度
 * @param {String} config.onGSensorChange.param.responseData.z z方向加速度
 */

/**
 * closeGSensorListener
 * @desc 关闭重力感应监听
 * @param {Object} config 配置信息
 * @param {Function} config.onClose 关闭回调函数
 * @param {Object} config.onClose.param 客户端回传数据
 * @param {Object} config.onClose.param.responseData 执行关闭回传数据
 * @param {String} config.onClose.param.responseData.result 关闭执行结果（0成功1失败）
 */

/**
 * openGSensorOnce
 * @desc 一次性取得重力感应监听
 * @param {Object} config 配置信息
 * @param {Function} config.onGSensorChange 监听重力感应变化回调函数
 * @param {Object} config.onGSensorChange.param 客户端回传数据
 * @param {Object} config.onGSensorChange.param.responseData 重力感应数据
 * @param {String} config.onGSensorChange.param.responseData.x x方向加速度
 * @param {String} config.onGSensorChange.param.responseData.y y方向加速度
 * @param {String} config.onGSensorChange.param.responseData.z z方向加速度
 */

/**
 * showGSensor
 * @desc 进入原生重力感应界面
 * @param {Function} callback 调用重力感应展示的回调
 */

/**
 * openCompassListener
 * @desc 打开罗盘监听
 * @param {Object} config 配置信息
 * @param {Function} config.onOpen 打开回调函数
 * @param {Object} config.onOpen.param 客户端回传数据
 * @param {Object} config.onOpen.param.responseData 执行打开回传数据
 * @param {String} config.onOpen.param.responseData.result 打开执行结果（0成功1失败）
 * @param {Function} config.onCompassChange 监听罗盘变化回调函数
 * @param {Object} config.onCompassChange.param 客户端回传数据
 * @param {Object} config.onCompassChange.param.responseData 重力感应数据
 * @param {String} config.onCompassChange.param.responseData.degree 角度
 */

/**
 * closeCompassListener
 * @desc 关闭罗盘监听
 * @param {Object} config 配置信息
 * @param {Function} config.onClose 关闭回调函数
 * @param {Object} config.onClose.param 客户端回传数据
 * @param {Object} config.onClose.param.responseData 执行关闭回传数据
 * @param {String} config.onClose.param.responseData.result 关闭执行结果（0成功1失败）
 */

/**
 * openCompassOnce
 * @desc 一次性取得罗盘监听
 * @param {Object} config 配置信息
 * @param {Function} config.onCompassChange 监听罗盘变化回调函数
 * @param {Object} config.onCompassChange.param 客户端回传数据
 * @param {Object} config.onCompassChange.param.responseData 重力感应数据
 * @param {String} config.onCompassChange.param.responseData.degree 角度
 */

/**
 * showCompass
 * @desc 进入原生罗盘界面
 * @param {Function} callback 调用重力感应展示的回调
 */
