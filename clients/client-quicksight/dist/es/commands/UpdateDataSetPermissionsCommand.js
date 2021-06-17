import { __extends } from "tslib";
import { UpdateDataSetPermissionsRequest, UpdateDataSetPermissionsResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateDataSetPermissionsCommand, serializeAws_restJson1UpdateDataSetPermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the permissions on a dataset.</p>
 * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/data-set-id</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSetPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDataSetPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDataSetPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSetPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSetPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDataSetPermissionsCommand = /** @class */ (function (_super) {
    __extends(UpdateDataSetPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDataSetPermissionsCommand(input) {
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
    UpdateDataSetPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateDataSetPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDataSetPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDataSetPermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDataSetPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDataSetPermissionsCommand(input, context);
    };
    UpdateDataSetPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDataSetPermissionsCommand(output, context);
    };
    return UpdateDataSetPermissionsCommand;
}($Command));
export { UpdateDataSetPermissionsCommand };
//# sourceMappingURL=UpdateDataSetPermissionsCommand.js.map