import { __extends } from "tslib";
import { AssociateInstanceStorageConfigRequest, AssociateInstanceStorageConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateInstanceStorageConfigCommand, serializeAws_restJson1AssociateInstanceStorageConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates a storage resource type for the first time. You can only associate one type of
 *    storage configuration in a single call. This means, for example, that you can't define an
 *    instance with multiple S3 buckets for storing chat transcripts.</p>
 *          <p>This API does not create a resource that doesn't exist. It only associates it to the
 *    instance. Ensure that the resource being specified in the storage configuration, like an S3
 *    bucket, exists when being used for association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateInstanceStorageConfigCommand = /** @class */ (function (_super) {
    __extends(AssociateInstanceStorageConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateInstanceStorageConfigCommand(input) {
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
    AssociateInstanceStorageConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "AssociateInstanceStorageConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateInstanceStorageConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateInstanceStorageConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateInstanceStorageConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateInstanceStorageConfigCommand(input, context);
    };
    AssociateInstanceStorageConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateInstanceStorageConfigCommand(output, context);
    };
    return AssociateInstanceStorageConfigCommand;
}($Command));
export { AssociateInstanceStorageConfigCommand };
//# sourceMappingURL=AssociateInstanceStorageConfigCommand.js.map