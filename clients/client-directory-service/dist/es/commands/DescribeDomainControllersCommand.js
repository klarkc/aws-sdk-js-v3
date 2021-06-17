import { __extends } from "tslib";
import { DescribeDomainControllersRequest, DescribeDomainControllersResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeDomainControllersCommand, serializeAws_json1_1DescribeDomainControllersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about any domain controllers in your directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeDomainControllersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeDomainControllersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeDomainControllersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDomainControllersCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainControllersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDomainControllersCommand = /** @class */ (function (_super) {
    __extends(DescribeDomainControllersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDomainControllersCommand(input) {
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
    DescribeDomainControllersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DescribeDomainControllersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDomainControllersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDomainControllersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDomainControllersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDomainControllersCommand(input, context);
    };
    DescribeDomainControllersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDomainControllersCommand(output, context);
    };
    return DescribeDomainControllersCommand;
}($Command));
export { DescribeDomainControllersCommand };
//# sourceMappingURL=DescribeDomainControllersCommand.js.map