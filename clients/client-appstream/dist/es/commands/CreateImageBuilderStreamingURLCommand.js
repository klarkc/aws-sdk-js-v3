import { __extends } from "tslib";
import { CreateImageBuilderStreamingURLRequest, CreateImageBuilderStreamingURLResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateImageBuilderStreamingURLCommand,
  serializeAws_json1_1CreateImageBuilderStreamingURLCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a URL to start an image builder streaming session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateImageBuilderStreamingURLCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateImageBuilderStreamingURLCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateImageBuilderStreamingURLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageBuilderStreamingURLCommandInput} for command's `input` shape.
 * @see {@link CreateImageBuilderStreamingURLCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateImageBuilderStreamingURLCommand = /** @class */ (function (_super) {
  __extends(CreateImageBuilderStreamingURLCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateImageBuilderStreamingURLCommand(input) {
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
  CreateImageBuilderStreamingURLCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "CreateImageBuilderStreamingURLCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateImageBuilderStreamingURLRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateImageBuilderStreamingURLResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateImageBuilderStreamingURLCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateImageBuilderStreamingURLCommand(input, context);
  };
  CreateImageBuilderStreamingURLCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateImageBuilderStreamingURLCommand(output, context);
  };
  return CreateImageBuilderStreamingURLCommand;
})($Command);
export { CreateImageBuilderStreamingURLCommand };
//# sourceMappingURL=CreateImageBuilderStreamingURLCommand.js.map
