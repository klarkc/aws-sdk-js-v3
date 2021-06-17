import { __extends } from "tslib";
import { GetTagValuesInput, GetTagValuesOutput } from "../models/models_0";
import { deserializeAws_json1_1GetTagValuesCommand, serializeAws_json1_1GetTagValuesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all tag values for the specified key that are used in the specified AWS
 *             Region for the calling AWS account.</p>
 *          <p>This operation supports pagination, where the response can be sent in
 *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
 *     if there are additional results available to return. Repeat the query, passing the
 *     <code>PaginationToken</code> response parameter value as an input to the next request until you
 *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
 *     there are no more results waiting to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, GetTagValuesCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, GetTagValuesCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new GetTagValuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTagValuesCommandInput} for command's `input` shape.
 * @see {@link GetTagValuesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTagValuesCommand = /** @class */ (function (_super) {
    __extends(GetTagValuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTagValuesCommand(input) {
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
    GetTagValuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsTaggingAPIClient";
        var commandName = "GetTagValuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTagValuesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetTagValuesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTagValuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTagValuesCommand(input, context);
    };
    GetTagValuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTagValuesCommand(output, context);
    };
    return GetTagValuesCommand;
}($Command));
export { GetTagValuesCommand };
//# sourceMappingURL=GetTagValuesCommand.js.map