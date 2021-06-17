import { __extends } from "tslib";
import { CreateStorageLocationResultMessage } from "../models/models_0";
import { deserializeAws_queryCreateStorageLocationCommand, serializeAws_queryCreateStorageLocationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a bucket in Amazon S3 to store application versions, logs, and other files used
 *       by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the
 *       first time you create an environment in a region. If the storage location already exists,
 *         <code>CreateStorageLocation</code> still returns the bucket name but does not create a new
 *       bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateStorageLocationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateStorageLocationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreateStorageLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStorageLocationCommandInput} for command's `input` shape.
 * @see {@link CreateStorageLocationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStorageLocationCommand = /** @class */ (function (_super) {
    __extends(CreateStorageLocationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStorageLocationCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateStorageLocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "CreateStorageLocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: CreateStorageLocationResultMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStorageLocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateStorageLocationCommand(input, context);
    };
    CreateStorageLocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateStorageLocationCommand(output, context);
    };
    return CreateStorageLocationCommand;
}($Command));
export { CreateStorageLocationCommand };
//# sourceMappingURL=CreateStorageLocationCommand.js.map