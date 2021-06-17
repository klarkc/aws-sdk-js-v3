import { __extends } from "tslib";
import { DisableImportFindingsForProductRequest, DisableImportFindingsForProductResponse } from "../models/models_1";
import { deserializeAws_restJson1DisableImportFindingsForProductCommand, serializeAws_restJson1DisableImportFindingsForProductCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the integration of the specified product with Security Hub. After the integration is
 *          disabled, findings from that product are no longer sent to Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableImportFindingsForProductCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableImportFindingsForProductCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableImportFindingsForProductCommandInput} for command's `input` shape.
 * @see {@link DisableImportFindingsForProductCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableImportFindingsForProductCommand = /** @class */ (function (_super) {
    __extends(DisableImportFindingsForProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableImportFindingsForProductCommand(input) {
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
    DisableImportFindingsForProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DisableImportFindingsForProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableImportFindingsForProductRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableImportFindingsForProductResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableImportFindingsForProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisableImportFindingsForProductCommand(input, context);
    };
    DisableImportFindingsForProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisableImportFindingsForProductCommand(output, context);
    };
    return DisableImportFindingsForProductCommand;
}($Command));
export { DisableImportFindingsForProductCommand };
//# sourceMappingURL=DisableImportFindingsForProductCommand.js.map