import { __extends } from "tslib";
import { SearchResourcesRequest, SearchResourcesResponse } from "../models/models_0";
import { deserializeAws_restJson1SearchResourcesCommand, serializeAws_restJson1SearchResourcesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves (queries) statistical data and other information about AWS resources that Amazon Macie monitors and analyzes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, SearchResourcesCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, SearchResourcesCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new SearchResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchResourcesCommandInput} for command's `input` shape.
 * @see {@link SearchResourcesCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchResourcesCommand = /** @class */ (function (_super) {
    __extends(SearchResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchResourcesCommand(input) {
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
    SearchResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "SearchResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchResourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchResourcesCommand(input, context);
    };
    SearchResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchResourcesCommand(output, context);
    };
    return SearchResourcesCommand;
}($Command));
export { SearchResourcesCommand };
//# sourceMappingURL=SearchResourcesCommand.js.map