import { __extends } from "tslib";
import { ListPublicKeysRequest, ListPublicKeysResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPublicKeysCommand, serializeAws_json1_1ListPublicKeysCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p>
 *          <note>
 *             <p>CloudTrail uses different private/public key pairs per region. Each digest file is signed with a private key unique to its region. Therefore, when you validate a digest file from a particular region, you must look in the same region for its corresponding public key.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListPublicKeysCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListPublicKeysCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new ListPublicKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPublicKeysCommandInput} for command's `input` shape.
 * @see {@link ListPublicKeysCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPublicKeysCommand = /** @class */ (function (_super) {
    __extends(ListPublicKeysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPublicKeysCommand(input) {
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
    ListPublicKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "ListPublicKeysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPublicKeysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPublicKeysResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPublicKeysCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPublicKeysCommand(input, context);
    };
    ListPublicKeysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPublicKeysCommand(output, context);
    };
    return ListPublicKeysCommand;
}($Command));
export { ListPublicKeysCommand };
//# sourceMappingURL=ListPublicKeysCommand.js.map