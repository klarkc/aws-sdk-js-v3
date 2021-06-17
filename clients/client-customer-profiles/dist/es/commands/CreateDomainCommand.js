import { __extends } from "tslib";
import { CreateDomainRequest, CreateDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDomainCommand, serializeAws_restJson1CreateDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a domain, which is a container for all customer data, such as customer profile
 *          attributes, object types, profile keys, and encryption keys. You can create multiple
 *          domains, and each domain can have multiple third-party integrations.</p>
 *          <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can
 *          be associated with one domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateDomainCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateDomainCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new CreateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainCommandInput} for command's `input` shape.
 * @see {@link CreateDomainCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDomainCommand = /** @class */ (function (_super) {
    __extends(CreateDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDomainCommand(input) {
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
    CreateDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "CreateDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDomainCommand(input, context);
    };
    CreateDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDomainCommand(output, context);
    };
    return CreateDomainCommand;
}($Command));
export { CreateDomainCommand };
//# sourceMappingURL=CreateDomainCommand.js.map