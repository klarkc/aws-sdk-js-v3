import { __extends } from "tslib";
import { AddLayerVersionPermissionRequest, AddLayerVersionPermissionResponse } from "../models/models_0";
import { deserializeAws_restJson1AddLayerVersionPermissionCommand, serializeAws_restJson1AddLayerVersionPermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>. Use this action to grant layer
 *       usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all
 *       accounts in an organization.</p>
 *          <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you
 *       specified when you added it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, AddLayerVersionPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, AddLayerVersionPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new AddLayerVersionPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddLayerVersionPermissionCommandInput} for command's `input` shape.
 * @see {@link AddLayerVersionPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddLayerVersionPermissionCommand = /** @class */ (function (_super) {
    __extends(AddLayerVersionPermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddLayerVersionPermissionCommand(input) {
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
    AddLayerVersionPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "AddLayerVersionPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddLayerVersionPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddLayerVersionPermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddLayerVersionPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddLayerVersionPermissionCommand(input, context);
    };
    AddLayerVersionPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddLayerVersionPermissionCommand(output, context);
    };
    return AddLayerVersionPermissionCommand;
}($Command));
export { AddLayerVersionPermissionCommand };
//# sourceMappingURL=AddLayerVersionPermissionCommand.js.map