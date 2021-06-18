import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { ExportApiRequest, ExportApiResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ExportApiCommandInput extends ExportApiRequest {}
export interface ExportApiCommandOutput extends ExportApiResponse, __MetadataBearer {}
export declare class ExportApiCommand extends $Command<
  ExportApiCommandInput,
  ExportApiCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: ExportApiCommandInput;
  constructor(input: ExportApiCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportApiCommandInput, ExportApiCommandOutput>;
  private serialize;
  private deserialize;
}
