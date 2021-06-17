import { __extends } from "tslib";
import { UpdateDomainMetadataRequest, UpdateDomainMetadataResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateDomainMetadataCommand, serializeAws_restJson1UpdateDomainMetadataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates domain metadata, such as DisplayName.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateDomainMetadataCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateDomainMetadataCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateDomainMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDomainMetadataCommand = /** @class */ (function (_super) {
    __extends(UpdateDomainMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDomainMetadataCommand(input) {
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
    UpdateDomainMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "UpdateDomainMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDomainMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDomainMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDomainMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDomainMetadataCommand(input, context);
    };
    UpdateDomainMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDomainMetadataCommand(output, context);
    };
    return UpdateDomainMetadataCommand;
}($Command));
export { UpdateDomainMetadataCommand };
//# sourceMappingURL=UpdateDomainMetadataCommand.js.map