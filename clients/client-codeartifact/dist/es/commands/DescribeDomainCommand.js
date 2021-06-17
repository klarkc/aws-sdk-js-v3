import { __extends } from "tslib";
import { DescribeDomainRequest, DescribeDomainResult } from "../models/models_0";
import { deserializeAws_restJson1DescribeDomainCommand, serializeAws_restJson1DescribeDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Returns a
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainDescription.html">DomainDescription</a>
 *       object that contains information about the requested domain.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DescribeDomainCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DescribeDomainCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DescribeDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "CodeartifactClient";
        var commandName = "DescribeDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDomainResult.filterSensitiveLog,
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