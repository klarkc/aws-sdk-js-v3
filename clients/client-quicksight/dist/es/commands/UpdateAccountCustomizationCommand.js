import { __extends } from "tslib";
import { UpdateAccountCustomizationRequest, UpdateAccountCustomizationResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateAccountCustomizationCommand, serializeAws_restJson1UpdateAccountCustomizationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates Amazon QuickSight customizations the current AWS Region. Currently, the only
 *             customization you can use is a theme.</p>
 *         <p>You can use customizations for your AWS account or, if you specify a namespace, for a
 *             QuickSight namespace instead. Customizations that apply to a namespace override
 *             customizations that apply to an AWS account. To find out which customizations apply, use
 *             the <code>DescribeAccountCustomization</code> API operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAccountCustomizationCommand = /** @class */ (function (_super) {
    __extends(UpdateAccountCustomizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAccountCustomizationCommand(input) {
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
    UpdateAccountCustomizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateAccountCustomizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAccountCustomizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAccountCustomizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAccountCustomizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAccountCustomizationCommand(input, context);
    };
    UpdateAccountCustomizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAccountCustomizationCommand(output, context);
    };
    return UpdateAccountCustomizationCommand;
}($Command));
export { UpdateAccountCustomizationCommand };
//# sourceMappingURL=UpdateAccountCustomizationCommand.js.map