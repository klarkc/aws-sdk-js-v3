import { __extends } from "tslib";
import { GetResourcesRequest, GetResourcesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetResourcesCommand, serializeAws_restJson1GetResourcesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a collection of resources, including folders and documents. The only
 *             <code>CollectionType</code> supported is <code>SHARED_WITH_ME</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetResourcesCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetResourcesCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcesCommandInput} for command's `input` shape.
 * @see {@link GetResourcesCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourcesCommand = /** @class */ (function (_super) {
    __extends(GetResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourcesCommand(input) {
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
    GetResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "GetResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetResourcesCommand(input, context);
    };
    GetResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetResourcesCommand(output, context);
    };
    return GetResourcesCommand;
}($Command));
export { GetResourcesCommand };
//# sourceMappingURL=GetResourcesCommand.js.map