import { __extends } from "tslib";
import { CreateLocationS3Request, CreateLocationS3Response } from "../models/models_0";
import { deserializeAws_json1_1CreateLocationS3Command, serializeAws_json1_1CreateLocationS3Command, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an endpoint for an Amazon S3 bucket.</p>
 *
 *
 *          <p>For
 *       more information, see
 *       https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli
 *       in the <i>AWS DataSync User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationS3Command } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationS3Command } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationS3CommandInput} for command's `input` shape.
 * @see {@link CreateLocationS3CommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLocationS3Command = /** @class */ (function (_super) {
    __extends(CreateLocationS3Command, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLocationS3Command(input) {
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
    CreateLocationS3Command.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "CreateLocationS3Command";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLocationS3Request.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLocationS3Response.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLocationS3Command.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLocationS3Command(input, context);
    };
    CreateLocationS3Command.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLocationS3Command(output, context);
    };
    return CreateLocationS3Command;
}($Command));
export { CreateLocationS3Command };
//# sourceMappingURL=CreateLocationS3Command.js.map