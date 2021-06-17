import { __extends } from "tslib";
import { RevokePermissionsRequest, RevokePermissionsResponse } from "../models/models_0";
import { deserializeAws_json1_1RevokePermissionsCommand, serializeAws_json1_1RevokePermissionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RevokePermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RevokePermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new RevokePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokePermissionsCommandInput} for command's `input` shape.
 * @see {@link RevokePermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokePermissionsCommand = /** @class */ (function (_super) {
    __extends(RevokePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokePermissionsCommand(input) {
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
    RevokePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "RevokePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RevokePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RevokePermissionsCommand(input, context);
    };
    RevokePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RevokePermissionsCommand(output, context);
    };
    return RevokePermissionsCommand;
}($Command));
export { RevokePermissionsCommand };
//# sourceMappingURL=RevokePermissionsCommand.js.map