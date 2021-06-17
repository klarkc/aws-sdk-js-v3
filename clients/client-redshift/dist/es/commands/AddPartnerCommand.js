import { __extends } from "tslib";
import { PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage } from "../models/models_0";
import { deserializeAws_queryAddPartnerCommand, serializeAws_queryAddPartnerCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a partner integration to a cluster.
 *             This operation authorizes a partner to push status updates for the specified database.
 *             To complete the integration, you also set up the integration on the partner website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AddPartnerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AddPartnerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AddPartnerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddPartnerCommandInput} for command's `input` shape.
 * @see {@link AddPartnerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddPartnerCommand = /** @class */ (function (_super) {
    __extends(AddPartnerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddPartnerCommand(input) {
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
    AddPartnerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "AddPartnerCommand";
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
    AddPartnerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAddPartnerCommand(input, context);
    };
    AddPartnerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAddPartnerCommand(output, context);
    };
    return AddPartnerCommand;
}($Command));
export { AddPartnerCommand };
//# sourceMappingURL=AddPartnerCommand.js.map