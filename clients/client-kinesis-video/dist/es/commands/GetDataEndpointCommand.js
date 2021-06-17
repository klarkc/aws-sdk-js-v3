import { __extends } from "tslib";
import { GetDataEndpointInput, GetDataEndpointOutput } from "../models/models_0";
import { deserializeAws_restJson1GetDataEndpointCommand, serializeAws_restJson1GetDataEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets an endpoint for a specified stream for either reading or writing. Use this
 *             endpoint in your application to read from the specified stream (using the
 *                 <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write
 *             to it (using the <code>PutMedia</code> operation).
 *             </p>
 *         <note>
 *             <p>The returned endpoint does not have the API name appended. The client needs to
 *                 add the API name to the returned endpoint.</p>
 *         </note>
 *
 *         <p>In the request, specify the stream either by <code>StreamName</code> or
 *                 <code>StreamARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, GetDataEndpointCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, GetDataEndpointCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new GetDataEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataEndpointCommandInput} for command's `input` shape.
 * @see {@link GetDataEndpointCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDataEndpointCommand = /** @class */ (function (_super) {
    __extends(GetDataEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDataEndpointCommand(input) {
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
    GetDataEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "GetDataEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDataEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetDataEndpointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDataEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDataEndpointCommand(input, context);
    };
    GetDataEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDataEndpointCommand(output, context);
    };
    return GetDataEndpointCommand;
}($Command));
export { GetDataEndpointCommand };
//# sourceMappingURL=GetDataEndpointCommand.js.map