import { __extends } from "tslib";
import { GetDeployablePatchSnapshotForInstanceRequest, GetDeployablePatchSnapshotForInstanceResult, } from "../models/models_1";
import { deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand, serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the current snapshot for the patch baseline the instance uses. This API is
 *    primarily used by the AWS-RunPatchBaseline Systems Manager document. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetDeployablePatchSnapshotForInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandInput} for command's `input` shape.
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeployablePatchSnapshotForInstanceCommand = /** @class */ (function (_super) {
    __extends(GetDeployablePatchSnapshotForInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeployablePatchSnapshotForInstanceCommand(input) {
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
    GetDeployablePatchSnapshotForInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetDeployablePatchSnapshotForInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeployablePatchSnapshotForInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeployablePatchSnapshotForInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeployablePatchSnapshotForInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand(input, context);
    };
    GetDeployablePatchSnapshotForInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand(output, context);
    };
    return GetDeployablePatchSnapshotForInstanceCommand;
}($Command));
export { GetDeployablePatchSnapshotForInstanceCommand };
//# sourceMappingURL=GetDeployablePatchSnapshotForInstanceCommand.js.map