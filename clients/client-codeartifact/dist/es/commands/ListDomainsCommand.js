import { __extends } from "tslib";
import { ListDomainsRequest, ListDomainsResult } from "../models/models_0";
import { deserializeAws_restJson1ListDomainsCommand, serializeAws_restJson1ListDomainsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">DomainSummary</a> objects for all domains owned by the AWS account that makes
 *       this call. Each returned <code>DomainSummary</code> object contains information about a
 *       domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListDomainsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListDomainsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDomainsCommand = /** @class */ (function (_super) {
    __extends(ListDomainsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDomainsCommand(input) {
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
    ListDomainsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "ListDomainsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDomainsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDomainsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDomainsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDomainsCommand(input, context);
    };
    ListDomainsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDomainsCommand(output, context);
    };
    return ListDomainsCommand;
}($Command));
export { ListDomainsCommand };
//# sourceMappingURL=ListDomainsCommand.js.map