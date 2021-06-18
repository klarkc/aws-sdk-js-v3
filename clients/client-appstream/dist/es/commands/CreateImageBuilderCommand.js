import { __extends } from "tslib";
import { CreateImageBuilderRequest, CreateImageBuilderResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateImageBuilderCommand,
  serializeAws_json1_1CreateImageBuilderCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p>
 *         <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateImageBuilderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageBuilderCommandInput} for command's `input` shape.
 * @see {@link CreateImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateImageBuilderCommand = /** @class */ (function (_super) {
  __extends(CreateImageBuilderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateImageBuilderCommand(input) {
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
  CreateImageBuilderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "CreateImageBuilderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateImageBuilderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateImageBuilderResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateImageBuilderCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateImageBuilderCommand(input, context);
  };
  CreateImageBuilderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateImageBuilderCommand(output, context);
  };
  return CreateImageBuilderCommand;
})($Command);
export { CreateImageBuilderCommand };
//# sourceMappingURL=CreateImageBuilderCommand.js.map
