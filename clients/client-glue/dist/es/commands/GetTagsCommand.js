import { __extends } from "tslib";
import { GetTagsRequest, GetTagsResponse } from "../models/models_1";
import { deserializeAws_json1_1GetTagsCommand, serializeAws_json1_1GetTagsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of tags associated with a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTagsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTagsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTagsCommandInput} for command's `input` shape.
 * @see {@link GetTagsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTagsCommand = /** @class */ (function (_super) {
    __extends(GetTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTagsCommand(input) {
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
    GetTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTagsCommand(input, context);
    };
    GetTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTagsCommand(output, context);
    };
    return GetTagsCommand;
}($Command));
export { GetTagsCommand };
//# sourceMappingURL=GetTagsCommand.js.map