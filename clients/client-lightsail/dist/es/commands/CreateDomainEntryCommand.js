import { __extends } from "tslib";
import { CreateDomainEntryRequest, CreateDomainEntryResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDomainEntryCommand, serializeAws_json1_1CreateDomainEntryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates one of the following domain name system (DNS) records in a domain DNS zone:
 *       Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority
 *       (SOA), service locator (SRV), or text (TXT).</p>
 *
 *
 *
 *          <p>The <code>create domain entry</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>domain name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDomainEntryCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDomainEntryCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDomainEntryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainEntryCommandInput} for command's `input` shape.
 * @see {@link CreateDomainEntryCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDomainEntryCommand = /** @class */ (function (_super) {
    __extends(CreateDomainEntryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDomainEntryCommand(input) {
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
    CreateDomainEntryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateDomainEntryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDomainEntryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDomainEntryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDomainEntryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDomainEntryCommand(input, context);
    };
    CreateDomainEntryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDomainEntryCommand(output, context);
    };
    return CreateDomainEntryCommand;
}($Command));
export { CreateDomainEntryCommand };
//# sourceMappingURL=CreateDomainEntryCommand.js.map