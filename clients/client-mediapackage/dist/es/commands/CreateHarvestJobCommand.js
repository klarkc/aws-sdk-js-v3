import { __extends } from "tslib";
import { CreateHarvestJobRequest, CreateHarvestJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateHarvestJobCommand, serializeAws_restJson1CreateHarvestJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a new HarvestJob record.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, CreateHarvestJobCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, CreateHarvestJobCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new CreateHarvestJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHarvestJobCommandInput} for command's `input` shape.
 * @see {@link CreateHarvestJobCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHarvestJobCommand = /** @class */ (function (_super) {
    __extends(CreateHarvestJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHarvestJobCommand(input) {
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
    CreateHarvestJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "CreateHarvestJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHarvestJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHarvestJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHarvestJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateHarvestJobCommand(input, context);
    };
    CreateHarvestJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateHarvestJobCommand(output, context);
    };
    return CreateHarvestJobCommand;
}($Command));
export { CreateHarvestJobCommand };
//# sourceMappingURL=CreateHarvestJobCommand.js.map