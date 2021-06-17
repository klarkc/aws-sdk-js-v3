import { __extends } from "tslib";
import { ListCompatibleImagesRequest, ListCompatibleImagesResult } from "../models/models_0";
import { deserializeAws_json1_1ListCompatibleImagesCommand, serializeAws_json1_1ListCompatibleImagesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs)
 *       that are owned by your AWS account that would be supported for use on a Snow device.
 *       Currently, supported AMIs are based on the CentOS 7 (x86_64) - with Updates HVM, Ubuntu Server
 *       14.04 LTS (HVM), and Ubuntu 16.04 LTS - Xenial (HVM) images, available on the AWS
 *       Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListCompatibleImagesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListCompatibleImagesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new ListCompatibleImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCompatibleImagesCommandInput} for command's `input` shape.
 * @see {@link ListCompatibleImagesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCompatibleImagesCommand = /** @class */ (function (_super) {
    __extends(ListCompatibleImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCompatibleImagesCommand(input) {
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
    ListCompatibleImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "ListCompatibleImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCompatibleImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCompatibleImagesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCompatibleImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCompatibleImagesCommand(input, context);
    };
    ListCompatibleImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCompatibleImagesCommand(output, context);
    };
    return ListCompatibleImagesCommand;
}($Command));
export { ListCompatibleImagesCommand };
//# sourceMappingURL=ListCompatibleImagesCommand.js.map