import { __extends } from "tslib";
import { DeleteDomainEntryRequest, DeleteDomainEntryResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDomainEntryCommand, serializeAws_json1_1DeleteDomainEntryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specific domain entry.</p>
 *          <p>The <code>delete domain entry</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>domain name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDomainEntryCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDomainEntryCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDomainEntryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDomainEntryCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainEntryCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDomainEntryCommand = /** @class */ (function (_super) {
    __extends(DeleteDomainEntryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDomainEntryCommand(input) {
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
    DeleteDomainEntryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteDomainEntryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDomainEntryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDomainEntryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDomainEntryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDomainEntryCommand(input, context);
    };
    DeleteDomainEntryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDomainEntryCommand(output, context);
    };
    return DeleteDomainEntryCommand;
}($Command));
export { DeleteDomainEntryCommand };
//# sourceMappingURL=DeleteDomainEntryCommand.js.map