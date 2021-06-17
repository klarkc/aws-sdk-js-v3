import { __extends } from "tslib";
import { GetTagKeysInput, GetTagKeysOutput } from "../models/models_0";
import { deserializeAws_json1_1GetTagKeysCommand, serializeAws_json1_1GetTagKeysCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all tag keys currently in use in the specified Region for the calling AWS
 *             account.</p>
 *          <p>This operation supports pagination, where the response can be sent in
 *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
 *     if there are additional results available to return. Repeat the query, passing the
 *     <code>PaginationToken</code> response parameter value as an input to the next request until you
 *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
 *     there are no more results waiting to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, GetTagKeysCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, GetTagKeysCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new GetTagKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTagKeysCommandInput} for command's `input` shape.
 * @see {@link GetTagKeysCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTagKeysCommand = /** @class */ (function (_super) {
    __extends(GetTagKeysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTagKeysCommand(input) {
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
    GetTagKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsTaggingAPIClient";
        var commandName = "GetTagKeysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTagKeysInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetTagKeysOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTagKeysCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTagKeysCommand(input, context);
    };
    GetTagKeysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTagKeysCommand(output, context);
    };
    return GetTagKeysCommand;
}($Command));
export { GetTagKeysCommand };
//# sourceMappingURL=GetTagKeysCommand.js.map