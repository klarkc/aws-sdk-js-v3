import { __extends } from "tslib";
import { PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage } from "../models/models_0";
import { deserializeAws_queryDeletePartnerCommand, serializeAws_queryDeletePartnerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeletePartnerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeletePartnerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeletePartnerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePartnerCommandInput} for command's `input` shape.
 * @see {@link DeletePartnerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePartnerCommand = /** @class */ (function (_super) {
    __extends(DeletePartnerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePartnerCommand(input) {
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
    DeletePartnerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeletePartnerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PartnerIntegrationInputMessage.filterSensitiveLog,
            outputFilterSensitiveLog: PartnerIntegrationOutputMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePartnerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeletePartnerCommand(input, context);
    };
    DeletePartnerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeletePartnerCommand(output, context);
    };
    return DeletePartnerCommand;
}($Command));
export { DeletePartnerCommand };
//# sourceMappingURL=DeletePartnerCommand.js.map