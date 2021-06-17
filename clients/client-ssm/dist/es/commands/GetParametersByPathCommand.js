import { __extends } from "tslib";
import { GetParametersByPathRequest, GetParametersByPathResult } from "../models/models_1";
import { deserializeAws_json1_1GetParametersByPathCommand, serializeAws_json1_1GetParametersByPathCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve information about one or more parameters in a specific hierarchy. </p>
 *          <note>
 *             <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
 *     in the request, the response includes information up to the limit specified. The number of items
 *     returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
 *     reaches an internal limit while processing the results, it stops the operation and returns the
 *     matching values up to that point and a <code>NextToken</code>. You can specify the
 *      <code>NextToken</code> in a subsequent call to get the next set of results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParametersByPathCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParametersByPathCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParametersByPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParametersByPathCommandInput} for command's `input` shape.
 * @see {@link GetParametersByPathCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetParametersByPathCommand = /** @class */ (function (_super) {
    __extends(GetParametersByPathCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetParametersByPathCommand(input) {
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
    GetParametersByPathCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetParametersByPathCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetParametersByPathRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetParametersByPathResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetParametersByPathCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetParametersByPathCommand(input, context);
    };
    GetParametersByPathCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetParametersByPathCommand(output, context);
    };
    return GetParametersByPathCommand;
}($Command));
export { GetParametersByPathCommand };
//# sourceMappingURL=GetParametersByPathCommand.js.map