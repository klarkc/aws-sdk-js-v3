import { __extends } from "tslib";
import { GetMLTransformsRequest, GetMLTransformsResponse } from "../models/models_1";
import { deserializeAws_json1_1GetMLTransformsCommand, serializeAws_json1_1GetMLTransformsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a sortable, filterable list of existing AWS Glue machine learning transforms. Machine
 *       learning transforms are a special type of transform that use machine learning to learn the
 *       details of the transformation to be performed by learning from examples provided by humans.
 *       These transformations are then saved by AWS Glue, and you can retrieve their metadata by
 *       calling <code>GetMLTransforms</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTransformsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTransformsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetMLTransformsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMLTransformsCommandInput} for command's `input` shape.
 * @see {@link GetMLTransformsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMLTransformsCommand = /** @class */ (function (_super) {
    __extends(GetMLTransformsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMLTransformsCommand(input) {
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
    GetMLTransformsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetMLTransformsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMLTransformsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMLTransformsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMLTransformsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMLTransformsCommand(input, context);
    };
    GetMLTransformsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMLTransformsCommand(output, context);
    };
    return GetMLTransformsCommand;
}($Command));
export { GetMLTransformsCommand };
//# sourceMappingURL=GetMLTransformsCommand.js.map