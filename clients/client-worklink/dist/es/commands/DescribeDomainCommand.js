import { __extends } from "tslib";
import { DescribeDomainRequest, DescribeDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDomainCommand, serializeAws_restJson1DescribeDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeDomainCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeDomainCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDomainCommand = /** @class */ (function (_super) {
    __extends(DescribeDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDomainCommand(input) {
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
    DescribeDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "DescribeDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDomainCommand(input, context);
    };
    DescribeDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDomainCommand(output, context);
    };
    return DescribeDomainCommand;
}($Command));
export { DescribeDomainCommand };
//# sourceMappingURL=DescribeDomainCommand.js.map