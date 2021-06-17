import { __extends } from "tslib";
import { DescribeTrustsRequest, DescribeTrustsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeTrustsCommand, serializeAws_json1_1DescribeTrustsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Obtains information about the trust relationships for this account.</p>
 *          <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeTrustsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeTrustsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeTrustsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrustsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrustsCommand = /** @class */ (function (_super) {
    __extends(DescribeTrustsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrustsCommand(input) {
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
    DescribeTrustsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DescribeTrustsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrustsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrustsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrustsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTrustsCommand(input, context);
    };
    DescribeTrustsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTrustsCommand(output, context);
    };
    return DescribeTrustsCommand;
}($Command));
export { DescribeTrustsCommand };
//# sourceMappingURL=DescribeTrustsCommand.js.map