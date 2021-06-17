import { __extends } from "tslib";
import { PartnerIntegrationOutputMessage } from "../models/models_0";
import { UpdatePartnerStatusInputMessage } from "../models/models_1";
import { deserializeAws_queryUpdatePartnerStatusCommand, serializeAws_queryUpdatePartnerStatusCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the status of a partner integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, UpdatePartnerStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, UpdatePartnerStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new UpdatePartnerStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePartnerStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePartnerStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePartnerStatusCommand = /** @class */ (function (_super) {
    __extends(UpdatePartnerStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePartnerStatusCommand(input) {
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
    UpdatePartnerStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "UpdatePartnerStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePartnerStatusInputMessage.filterSensitiveLog,
            outputFilterSensitiveLog: PartnerIntegrationOutputMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePartnerStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdatePartnerStatusCommand(input, context);
    };
    UpdatePartnerStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdatePartnerStatusCommand(output, context);
    };
    return UpdatePartnerStatusCommand;
}($Command));
export { UpdatePartnerStatusCommand };
//# sourceMappingURL=UpdatePartnerStatusCommand.js.map