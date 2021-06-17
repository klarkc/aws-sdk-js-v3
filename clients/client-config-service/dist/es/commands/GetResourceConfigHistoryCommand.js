import { __extends } from "tslib";
import { GetResourceConfigHistoryRequest, GetResourceConfigHistoryResponse } from "../models/models_0";
import { deserializeAws_json1_1GetResourceConfigHistoryCommand, serializeAws_json1_1GetResourceConfigHistoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of configuration items for the specified
 * 			resource. The list contains details about each state of the resource
 * 			during the specified time interval. If you specified a retention
 * 			period to retain your <code>ConfigurationItems</code> between a
 * 			minimum of 30 days and a maximum of 7 years (2557 days), AWS Config
 * 			returns the <code>ConfigurationItems</code> for the specified
 * 			retention period. </p>
 * 		       <p>The response is paginated. By default, AWS Config returns a
 * 			limit of 10 configuration items per page. You can customize this
 * 			number with the <code>limit</code> parameter. The response includes
 * 			a <code>nextToken</code> string. To get the next page of results,
 * 			run the request again and specify the string for the
 * 				<code>nextToken</code> parameter.</p>
 * 		       <note>
 * 			         <p>Each call to the API is limited to span a duration of seven
 * 				days. It is likely that the number of records returned is
 * 				smaller than the specified <code>limit</code>. In such cases,
 * 				you can make another call, using the
 * 				<code>nextToken</code>.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetResourceConfigHistoryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetResourceConfigHistoryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetResourceConfigHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceConfigHistoryCommandInput} for command's `input` shape.
 * @see {@link GetResourceConfigHistoryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceConfigHistoryCommand = /** @class */ (function (_super) {
    __extends(GetResourceConfigHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourceConfigHistoryCommand(input) {
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
    GetResourceConfigHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetResourceConfigHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourceConfigHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourceConfigHistoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourceConfigHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResourceConfigHistoryCommand(input, context);
    };
    GetResourceConfigHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResourceConfigHistoryCommand(output, context);
    };
    return GetResourceConfigHistoryCommand;
}($Command));
export { GetResourceConfigHistoryCommand };
//# sourceMappingURL=GetResourceConfigHistoryCommand.js.map