import { __extends } from "tslib";
import { ListDistributedGrantsRequest, ListDistributedGrantsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDistributedGrantsCommand, serializeAws_json1_1ListDistributedGrantsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the grants distributed for the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListDistributedGrantsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListDistributedGrantsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListDistributedGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributedGrantsCommandInput} for command's `input` shape.
 * @see {@link ListDistributedGrantsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDistributedGrantsCommand = /** @class */ (function (_super) {
    __extends(ListDistributedGrantsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDistributedGrantsCommand(input) {
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
    ListDistributedGrantsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ListDistributedGrantsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDistributedGrantsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDistributedGrantsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDistributedGrantsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDistributedGrantsCommand(input, context);
    };
    ListDistributedGrantsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDistributedGrantsCommand(output, context);
    };
    return ListDistributedGrantsCommand;
}($Command));
export { ListDistributedGrantsCommand };
//# sourceMappingURL=ListDistributedGrantsCommand.js.map