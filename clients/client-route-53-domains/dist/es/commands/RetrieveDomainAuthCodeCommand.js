import { __extends } from "tslib";
import { RetrieveDomainAuthCodeRequest, RetrieveDomainAuthCodeResponse } from "../models/models_0";
import { deserializeAws_json1_1RetrieveDomainAuthCodeCommand, serializeAws_json1_1RetrieveDomainAuthCodeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RetrieveDomainAuthCodeCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RetrieveDomainAuthCodeCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new RetrieveDomainAuthCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetrieveDomainAuthCodeCommandInput} for command's `input` shape.
 * @see {@link RetrieveDomainAuthCodeCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RetrieveDomainAuthCodeCommand = /** @class */ (function (_super) {
    __extends(RetrieveDomainAuthCodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RetrieveDomainAuthCodeCommand(input) {
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
    RetrieveDomainAuthCodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "RetrieveDomainAuthCodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RetrieveDomainAuthCodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RetrieveDomainAuthCodeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RetrieveDomainAuthCodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RetrieveDomainAuthCodeCommand(input, context);
    };
    RetrieveDomainAuthCodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RetrieveDomainAuthCodeCommand(output, context);
    };
    return RetrieveDomainAuthCodeCommand;
}($Command));
export { RetrieveDomainAuthCodeCommand };
//# sourceMappingURL=RetrieveDomainAuthCodeCommand.js.map